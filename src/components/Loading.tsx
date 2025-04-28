

interface LoadingProps {
  fullPage?: boolean;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ fullPage = false, text = "Loading..." }) => {
  return (
    <div className={`${fullPage ? "fixed inset-0 flex items-center justify-center bg-black/60 z-50" : "flex items-center justify-center"}`}>
      <div className="flex flex-col items-center">
        {/* <Loader2 className="h-10 w-10 text-purple-600 animate-spin" /> */}
        <span className="loader">
            <img src="../../Images/logo.png" className="p-2" alt="" />
        </span>
        <p className="mt-2 text-gray-100 cf font-semibold text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Loading;
