export default function Loading() {
  return (
    <div className="container mx-auto flex flex-wrap items-center justify-center p-4">
      {/* سنقوم بتكرار 6 كروت وهمية */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-full md:w-1/3 p-4">
          <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden min-h-[400px]">
            
            {/* 1. مساحة الصورة الوهمية مع تأثير النبض */}
            <div className="w-full h-52 bg-gray-300 animate-pulse"></div>
            
            <div className="p-6">
              {/* 2. خط العنوان الوهمي */}
              <div className="h-6 bg-gray-300 rounded-full w-3/4 mb-4 animate-pulse"></div>
              
              {/* 3. أسطر الوصف الوهمية */}
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 rounded-full w-full animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded-full w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded-full w-2/3 animate-pulse"></div>
              </div>
              
              {/* 4. زر وهمي تحت */}
              <div className="mt-8 h-10 bg-gray-300 rounded-xl w-1/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}