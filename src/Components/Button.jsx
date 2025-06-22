export default function Button({ children, className, onclick }) {
  return (
    <button
      className={` ${className} w-[200px] cursor-pointer py-2.5 mt-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg tracking-tight shadow-md hover:from-indigo-400 hover:to-purple-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 m-[4px]`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
