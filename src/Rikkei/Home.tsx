import { Outlet, Link } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "session",
      name: "Session",
      sections: [
        {
          id: "sessions",
          name: "Danh sách Session",
          items: [
            { name: "Session17", href: "/17" },
            { name: "Session18", href: "/18" },
            { name: "Session19", href: "/19" },
            { name: "Session20", href: "/20" },
            { name: "Session21", href: "/21" },
            { name: "Session25", href: "/25" },
          ],
        },
      ],
    },
  ],
  pages: [],
};

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="w-64 h-screen border-r p-4 space-y-4">
        {navigation.categories.map((category) => (
          <div key={category.id}>
            <h2 className="font-bold mb-2">{category.name}</h2>
            {category.sections.map((section) => (
              <div key={section.id}>
                <h3 className="font-semibold text-sm mb-1">{section.name}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="block px-2 py-1 rounded hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </nav>

      {/* Nội dung */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
