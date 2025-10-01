export default function AnnouncementBanner() {
  return (
    <div className="w-full h-[44px] bg-[#3d3246] text-white flex items-center justify-center">
      <span className="text-center w-full text-base">
        <span className="hidden md:inline">
          We made 2 huge announcements!{" "}
          <a
            href="https://www.youtube.com/watch?v=xn-lu9CUhRE"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200 transition-colors"
          >
            Watch the video
          </a>
        </span>
        <span className="inline md:hidden">
          2 huge announcements!{" "}
          <a
            href="https://www.youtube.com/watch?v=xn-lu9CUhRE"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200 transition-colors"
          >
            Watch video
          </a>
        </span>
      </span>
    </div>
  );
}
