import React from "react";

const index: React.FC = () => {
  return (
    <div className="p-5 space-y-10">
      {/* Bài 1 */}
      <section>
        <h2 className="text-xl font-bold mb-2">Bài 1</h2>
        <h1 className="text-red-500 text-[32px]">Đây là tiêu đề 1</h1>
      </section>

      {/* Bài 2 */}
      <section>
        <h2 className="text-xl font-bold mb-2">Bài 2</h2>
        <div className="w-[200px] h-[200px] bg-gray-300 rounded-lg"></div>
      </section>

      {/* Bài 3 */}
      <section>
        <h2 className="text-xl font-bold mb-2">Bài 3</h2>
        <div className="flex space-x-2">
          <div className="w-[200px] h-[200px] bg-[#3b82f6] rounded-full"></div>
          <div className="w-[200px] h-[200px] bg-[#ef4444] rounded-full"></div>
          <div className="w-[200px] h-[200px] bg-[#22c55e] rounded-full"></div>
        </div>
      </section>

      {/* Bài 4 */}
      <section>
        <h2 className="text-xl font-bold mb-2">Bài 4</h2>
        <button className="bg-[#0ea5e9] text-white px-4 py-2 rounded-lg hover:bg-[#0369a1] transition">
          Button
        </button>
      </section>

      {/* Bài 5 */}
      <section>
        <h2 className="text-xl font-bold mb-2">Bài 5</h2>
        <div className="relative w-[300px] h-[200px] bg-gray-200">
          <div className="absolute top-2 left-2 w-12 h-12 bg-blue-500"></div>
          <div className="absolute bottom-2 right-2 w-12 h-12 bg-red-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-700">Centered Text</p>
          </div>
        </div>
      </section>

      {/* Bài 6 */}
      <section>
        <h2 className="text-xl font-bold mb-2">Bài 6</h2>
        <div className="w-[500px] h-[200px] overflow-auto border p-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis, mollitia. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis, mollitia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis, mollitia. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facilis, mollitia. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis, mollitia. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis, mollitia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis, mollitia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default index;
