import { Routes, Route, Link, Navigate } from "react-router-dom";
import useSlugData from "../lib/getData";
import { File, DownloadSimple } from "phosphor-react";

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
    item.acf.category.startsWith("document:")
  );

  const images = slugData.filter((item: any) =>
    item.acf.category.startsWith("image:")
  );

  return (
    <main className="pt-[116px] px-4">
			<h2 className="text-2xl font-bold mb-6">Interner Bereich</h2>

			{loading && <p>Loading...</p>}
			{error && <p>Error loading data</p>}
			{!loading && !error && (
				<>
					<section className="mb-8">
						<h3 className="text-xl font-semibold mb-4">Dokumente</h3>
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
											className="text-blue-600 hover:underline"
										>
											{doc.title.rendered}
										</a>
									</div>
									<a
										href={doc.acf.data.url}
										download
										className="text-gray-600 hover:text-gray-800 transition-colors"
									>
										<DownloadSimple size={24} weight="bold" />
									</a>
								</li>
							))}
						</ul>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-4">Bilder</h3>
						<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
							{images.map((img: any) => (
								<li key={img.id}>
									<img
										src={img.acf.data.url}
										alt={img.acf.data.alt || img.title.rendered}
										className="w-full h-auto rounded-lg shadow-sm"
									/>
								</li>
							))}
						</ul>
					</section>
				</>
			)}
    </main>
  );
}