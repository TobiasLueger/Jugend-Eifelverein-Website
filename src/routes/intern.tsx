import useSlugData from "../lib/getData";
import { File, DownloadSimple, SpinnerGap } from "phosphor-react";

export default function Intern() {
  const {
    slugData,
    loading,
    error,
  }: { slugData: any; loading: boolean; error: boolean } = useSlugData(
    "intern",
  );

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

  return (
    <main className="pt-[116px] px-4">
      <h2>Interner Bereich</h2>

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
          {formulars.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Formulare</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {formulars.map((doc: any) => (
                  <li
                    key={doc.id}
                    className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <File size={32} weight="bold" className="text-gray-600" />
                      <a
                        href={doc.acf.data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-greenDefault hover:underline"
                      >
                        {doc.title.rendered}
                      </a>
                    </div>
                    <a
                      href={doc.acf.data.url}
                      download={doc.acf.data.alt || doc.title.rendered}
                      className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                      title="Download"
                    >
                      <DownloadSimple size={24} weight="bold" className="cursor-pointer"/>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {documents.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Dokumente</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {documents.map((doc: any) => (
                  <li
                    key={doc.id}
                    className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <File size={32} weight="bold" className="text-gray-600" />
                      <a
                        href={doc.acf.data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-greenDefault hover:underline"
                      >
                        {doc.title.rendered}
                      </a>
                    </div>
                    <a
                      href={doc.acf.data.url}
                      download={doc.acf.data.alt || doc.title.rendered}
                      className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                      title="Download"
                    >
                      <DownloadSimple size={24} weight="bold" className="cursor-pointer"/>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {images.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold mb-4">Bilder</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((img: any) => (
                  <li key={img.id} className="relative border border-gray-300 rounded-lg flex justify-center items-center shadow-sm hover:shadow-md transition-shadow">
                    <a
                      href={img.acf.data.url}
                      download={img.acf.data.alt || img.title.rendered} // This ensures the image is downloaded instead of opened
                      className=""
                      title="Download"
                    >
                      <img
                        src={img.acf.data.url}
                        alt={img.acf.data.alt || img.title.rendered}
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </a>
                    <a
                      href={img.acf.data.url}
                      download={img.acf.data.alt || img.title.rendered} // This ensures the image is downloaded instead of opened
                      className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-sm hover:shadow-md transition-shadow"
                      title="Download"
                    >
                      <DownloadSimple size={24} weight="bold" className="text-gray-600 hover:text-gray-800 transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </main>
  );
}