// @ts-ignore
import useSlugData from "../lib/getData";
import { File, DownloadSimple, SpinnerGap, MagnifyingGlass, X, Tag, Folder, Heart } from "phosphor-react";
import { useState, useMemo, useEffect } from "react";
import PDFPreview from "../components/PDFPreview/PDFPreview";

export default function Intern() {
  const {
    slugData,
    loading,
    error,
  }: { slugData: any; loading: boolean; error: boolean } = useSlugData(
    "intern",
  );

  // State für Suchfunktion
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // State für PDF-Vorschau
  const [pdfPreview, setPdfPreview] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: "",
    title: ""
  });

  // State für Favoriten
  const [favorites, setFavorites] = useState<number[]>([]);

  // Favoriten aus localStorage laden
  useEffect(() => {
    const savedFavorites = localStorage.getItem('intern-favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Fehler beim Laden der Favoriten:', error);
      }
    }
  }, []);

  // Favoriten in localStorage speichern
  useEffect(() => {
    localStorage.setItem('intern-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Extrahiere alle verfügbaren Kategorien und Tags
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    slugData.forEach((item: any) => {
      if (item.acf?.category) {
        const category = item.acf.category.split(':')[0];
        categories.add(category);
      }
    });
    return Array.from(categories);
  }, [slugData]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    slugData.forEach((item: any) => {
      if (item.acf?.tags) {
        item.acf.tags.forEach((tag: any) => {
          tags.add(tag.name);
        });
      }
    });
    return Array.from(tags);
  }, [slugData]);

  // Filtere die Dokumente und Bilder aus den slugData
  const documents = slugData.filter((item: any) =>
    item.acf.category.startsWith("document:Dokumente")
  );

  const formulars = slugData.filter((item: any) =>
    item.acf.category.endsWith("document:Formulare")
  );

  const images = slugData.filter((item: any) =>
    item.acf.category.startsWith("image:")
  );

  // Kombinierte Such- und Filterfunktion
  const filteredData = useMemo(() => {
    let filtered = slugData;

    // Textsuche
    if (searchTerm) {
      filtered = filtered.filter((item: any) =>
        item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.acf?.description && item.acf.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.acf?.alt && item.acf.alt.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Kategorie-Filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item: any) =>
        item.acf?.category?.startsWith(selectedCategory)
      );
    }

    // Tag-Filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((item: any) =>
        item.acf?.tags?.some((tag: any) => selectedTags.includes(tag.name))
      );
    }

    return filtered;
  }, [slugData, searchTerm, selectedCategory, selectedTags]);

  // Filtere die gefilterten Daten nach Typ
  const filteredDocuments = filteredData.filter((item: any) =>
    item.acf.category.startsWith("document:Dokumente")
  );

  const filteredFormulars = filteredData.filter((item: any) =>
    item.acf.category.endsWith("document:Formulare")
  );

  const filteredImages = filteredData.filter((item: any) =>
    item.acf.category.startsWith("image:")
  );

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedTags([]);
  };

  // PDF-Vorschau Funktionen
  const openPdfPreview = (url: string, title: string) => {
    setPdfPreview({
      isOpen: true,
      url,
      title
    });
  };

  const closePdfPreview = () => {
    setPdfPreview({
      isOpen: false,
      url: "",
      title: ""
    });
  };

  // Prüfe ob Datei ein PDF ist
  const isPdfFile = (url: string) => {
    return url.toLowerCase().includes('.pdf') || url.toLowerCase().includes('pdf');
  };

  // Favoriten-Funktionen
  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const isFavorite = (id: number) => {
    return favorites.includes(id);
  };

  // Gefilterte Favoriten
  const favoriteItems = useMemo(() => {
    return slugData.filter((item: any) => favorites.includes(item.id));
  }, [slugData, favorites]);

  const filteredFavorites = useMemo(() => {
    let filtered = favoriteItems;

    // Textsuche
    if (searchTerm) {
      filtered = filtered.filter((item: any) =>
        item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.acf?.description && item.acf.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.acf?.alt && item.acf.alt.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Kategorie-Filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item: any) =>
        item.acf?.category?.startsWith(selectedCategory)
      );
    }

    // Tag-Filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((item: any) =>
        item.acf?.tags?.some((tag: any) => selectedTags.includes(tag.name))
      );
    }

    return filtered;
  }, [favoriteItems, searchTerm, selectedCategory, selectedTags]);

  // Kategorisiere Favoriten nach Typ
  const favoriteDocuments = filteredFavorites.filter((item: any) =>
    item.acf.category.startsWith("document:Dokumente")
  );

  const favoriteFormulars = filteredFavorites.filter((item: any) =>
    item.acf.category.endsWith("document:Formulare")
  );

  const favoriteImages = filteredFavorites.filter((item: any) =>
    item.acf.category.startsWith("image:")
  );

  // Hilfsfunktion für Dateityp-Icon
  const getFileTypeIcon = (item: any) => {
    if (item.acf.category.startsWith("image:")) {
      return <img src="/src/images/mountain.png" alt="Bild" className="w-6 h-6" />;
    } else if (item.acf.category.endsWith("document:Formulare")) {
      return <Folder size={24} />;
    } else {
      return <File size={24} />;
    }
  };

  return (
    <main className="pt-[116px] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Interner Bereich</h2>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="spinner-border animate-spin inline-block w-12 h-12 rounded-full text-greenDefault" role="status">
              <SpinnerGap size={48} />
            </div>
          </div>
        )}
        {error && <p>Error loading data</p>}
        {!loading && !error && (
          <>
            {/* Such- und Filterbereich */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                {/* Suchfeld */}
                <div className="flex-1 relative">
                  <MagnifyingGlass 
                    size={20} 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  />
                  <input
                    type="text"
                    placeholder="Dokumente durchsuchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenDefault focus:border-transparent"
                  />
                </div>

                {/* Kategorie-Filter */}
                <div className="lg:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenDefault focus:border-transparent"
                  >
                    <option value="all">Alle Kategorien</option>
                    {allCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter zurücksetzen */}
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2"
                >
                  <X size={16} />
                  Filter zurücksetzen
                </button>
              </div>

              {/* Tag-Filter */}
              {allTags.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Tag size={16} />
                    Tags filtern:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-greenDefault text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Suchergebnisse Info */}
              <div className="mt-4 text-sm text-gray-600">
                {searchTerm || selectedCategory !== "all" || selectedTags.length > 0 ? (
                  <span>
                    {filteredData.length} Ergebnis{filteredData.length !== 1 ? 'se' : ''} gefunden
                    {searchTerm && ` für "${searchTerm}"`}
                  </span>
                ) : (
                  <span>{slugData.length} Dokumente verfügbar</span>
                )}
              </div>
            </div>

            {/* Favoriten */}
            {favoriteItems.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart size={24} className="text-red-500" weight="fill" />
                  Favoriten ({filteredFavorites.length})
                </h2>
                
                {/* Alle Favoriten in einer einheitlichen Liste */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredFavorites.map((item: any) => (
                    <li
                      key={item.id}
                      className={`relative flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                        isPdfFile(item.acf.data.url) ? 'cursor-pointer' : ''
                      }`}
                      onClick={isPdfFile(item.acf.data.url) ? () => openPdfPreview(item.acf.data.url, item.title.rendered) : undefined}
                    >
                      <div className="flex items-center space-x-4 pr-12">
                        {getFileTypeIcon(item)}
                        <span className="hover:text-greenDefault">
                          {item.title.rendered}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* Download Button */}
                        <a
                          href={item.acf.data.url}
                          download={item.acf.data.alt || item.title.rendered}
                          className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                          title="Download"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <DownloadSimple size={20} weight="bold" />
                        </a>
                      </div>
                      {/* Favoriten Button - absolut positioniert */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className="absolute -top-2 -left-2 p-2 text-red-500 hover:text-red-700 bg-white hover:bg-red-50 rounded-lg transition-colors shadow-sm hover:shadow-md"
                        title="Aus Favoriten entfernen"
                      >
                        <Heart size={20} weight="fill" />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Formulare */}
            {filteredFormulars.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Folder size={24} />
                Formulare ({filteredFormulars.length})
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredFormulars.map((doc: any) => (
                  <li
                    key={doc.id}
                    className={`relative flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                      isPdfFile(doc.acf.data.url) ? 'cursor-pointer' : ''
                    }`}
                    onClick={isPdfFile(doc.acf.data.url) ? () => openPdfPreview(doc.acf.data.url, doc.title.rendered) : undefined}
                  >
                    <div className="flex items-center space-x-4 pr-12">
                      <File size={32} weight="bold" className="text-gray-600" />
                      <span className="hover:text-greenDefault">
                        {doc.title.rendered}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Download Button */}
                      <a
                        href={doc.acf.data.url}
                        download={doc.acf.data.alt || doc.title.rendered}
                        className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                        title="Download"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <DownloadSimple size={20} weight="bold" />
                      </a>
                    </div>
                    {/* Favoriten Button - absolut positioniert */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(doc.id);
                      }}
                      className={`absolute -top-2 -left-2 p-2 rounded-lg transition-colors ${
                        isFavorite(doc.id)
                          ? 'text-red-500 hover:text-red-700 bg-white hover:bg-red-50'
                          : 'text-gray-400 hover:text-red-500 bg-white hover:bg-red-50'
                      } shadow-sm hover:shadow-md`}
                      title={isFavorite(doc.id) ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
                    >
                      <Heart size={20} weight={isFavorite(doc.id) ? "fill" : "regular"} />
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {filteredDocuments.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <File size={24} />
                Dokumente ({filteredDocuments.length})
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredDocuments.map((doc: any) => (
                  <li
                    key={doc.id}
                    className={`relative flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                      isPdfFile(doc.acf.data.url) ? 'cursor-pointer' : ''
                    }`}
                    onClick={isPdfFile(doc.acf.data.url) ? () => openPdfPreview(doc.acf.data.url, doc.title.rendered) : undefined}
                  >
                    <div className="flex items-center space-x-4 pr-12">
                      <File size={32} weight="bold" className="text-gray-600" />
                      <span className="hover:text-greenDefault">
                        {doc.title.rendered}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Download Button */}
                      <a
                        href={doc.acf.data.url}
                        download={doc.acf.data.alt || doc.title.rendered}
                        className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                        title="Download"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <DownloadSimple size={20} weight="bold" />
                      </a>
                    </div>
                    {/* Favoriten Button - absolut positioniert */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(doc.id);
                      }}
                      className={`absolute -top-2 -left-2 p-2 rounded-lg transition-colors ${
                        isFavorite(doc.id)
                          ? 'text-red-500 hover:text-red-700 bg-white hover:bg-red-50'
                          : 'text-gray-400 hover:text-red-500 bg-white hover:bg-red-50'
                      } shadow-sm hover:shadow-md`}
                      title={isFavorite(doc.id) ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
                    >
                      <Heart size={20} weight={isFavorite(doc.id) ? "fill" : "regular"} />
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {filteredImages.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <img src="/src/images/mountain.png" alt="Bilder" className="w-6 h-6" />
                Bilder ({filteredImages.length})
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredImages.map((img: any) => (
                  <li key={img.id} className="relative border border-gray-300 rounded-lg flex justify-center items-center shadow-sm hover:shadow-md transition-shadow group">
                    <a
                      href={img.acf.data.url}
                      download={img.acf.data.alt || img.title.rendered}
                      className=""
                      title="Download"
                    >
                      <img
                        src={img.acf.data.url}
                        alt={img.acf.data.alt || img.title.rendered}
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </a>
                    {/* Favoriten Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(img.id);
                      }}
                      className={`absolute top-2 left-2 p-2 rounded-lg transition-colors ${
                        isFavorite(img.id)
                          ? 'text-red-500 hover:text-red-700 bg-white hover:bg-red-50'
                          : 'text-gray-400 hover:text-red-500 bg-white hover:bg-red-50'
                      } shadow-sm hover:shadow-md`}
                      title={isFavorite(img.id) ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
                    >
                      <Heart size={20} weight={isFavorite(img.id) ? "fill" : "regular"} />
                    </button>
                    {/* Download Button */}
                    <a
                      href={img.acf.data.url}
                      download={img.acf.data.alt || img.title.rendered}
                      className="absolute top-2 right-2 bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      title="Download"
                    >
                      <DownloadSimple size={20} weight="bold" className="text-gray-600 hover:text-gray-800 transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
            {/* Keine Ergebnisse */}
            {filteredData.length === 0 && (searchTerm || selectedCategory !== "all" || selectedTags.length > 0) && (
              <div className="text-center py-12">
                <MagnifyingGlass size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Keine Ergebnisse gefunden</h3>
                <p className="text-gray-600 mb-4">
                  Versuche es mit anderen Suchbegriffen oder ändere deine Filter.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-greenDefault text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Alle Filter zurücksetzen
                </button>
              </div>
            )}
          </>
        )}

        {/* PDF-Vorschau Modal */}
        <PDFPreview
          isOpen={pdfPreview.isOpen}
          url={pdfPreview.url}
          title={pdfPreview.title}
          onClose={closePdfPreview}
        />
      </div>
    </main>
  );
}