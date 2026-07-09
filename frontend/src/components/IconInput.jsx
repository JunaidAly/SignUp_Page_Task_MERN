function IconInput({ icon, ...props }) {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
        {icon}
      </span>
      <input
        {...props}
        className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
    </div>
  );
}

export default IconInput;
