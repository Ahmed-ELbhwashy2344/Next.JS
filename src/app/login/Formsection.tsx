// "use client";

// import { useState } from "react";

// export default function Formsection() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const SubmitHandelar = (e:React.FormEvent) => {
//     e.preventDefault()
//     if(email==="") return setEmailError('Email is Required')
//     if(password==="") return setPasswordError('Password is Required')
//   }
//   return (
//     <div className="w-1/4">
//       <form onSubmit={SubmitHandelar} className=" flex flex-col  ">
//         <input
//           className=" my-2 border p-3 border-black rounded-2xl"
//           type="email"
//           placeholder="Enter Your Email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />
//         <h3 className=" font-bold text-3xl text-red-500">{emailError}</h3>
//         <input
//           className=" my-2 border p-3 border-black rounded-2xl"
//           type="password"
//           placeholder="Enter Your Password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//         />
//         <h3 className=" font-bold text-3xl text-red-500">{passwordError}</h3>
//         <button
//           className="bg-blue-500 text-white font-bold text-3xl p-3 rounded-2xl hover:bg-blue-700 cursor-pointer"
//           type="submit"
//         >
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Formsection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter()
  // 1. يجب قبول كائن الحدث (e)
  // 2. يجب استدعاء e.preventDefault()
  const SubmitHandelar = (e:React.FormEvent) => {
    e.preventDefault(); // 👈 **هذا هو المفتاح لمنع إعادة التحميل**

    // 3. (إضافة تحسين): قم بتصفير الأخطاء قبل التحقق مرة أخرى
    setEmailError('');
    setPasswordError('');

    // المنطق الجديد للتحقق من الصحة
    let hasError = false;

    if (email === "") {
      setEmailError('Email is Required');
      hasError = true;
    }

    if (password === "") {
      setPasswordError('Password is Required');
      hasError = true;
    }

    // إذا لم تكن هناك أخطاء، قم بتنفيذ منطق تسجيل الدخول الفعلي هنا
    if (!hasError) {
      console.log("Form Submitted Successfully!", { email, password });
      // يمكنك هنا وضع منطق إرسال البيانات إلى API أو الانتقال لصفحة أخرى
    }
    router.replace("/")
  };

  return (
    <div className="w-1/4">
      {/* تأكد من أن الدالة تستخدم لمعالجة الحدث */}
      <form onSubmit={SubmitHandelar} className=" flex flex-col  ">
        <input
          className=" my-2 border p-3 border-black rounded-2xl"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {/* ملاحظة: يمكنك جعل الـ h3 يظهر فقط عند وجود خطأ */}
        {emailError && <h3 className=" font-bold text-3xl text-red-500">{emailError}</h3>}
        
        <input
          className=" my-2 border p-3 border-black rounded-2xl"
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {passwordError && <h3 className=" font-bold text-3xl text-red-500">{passwordError}</h3>}
        
        <button
          className="bg-blue-500 text-white font-bold text-3xl p-3 rounded-2xl hover:bg-blue-700 cursor-pointer"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
