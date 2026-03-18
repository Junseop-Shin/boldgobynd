export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }} className="text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div>
            <p className="text-xl font-black tracking-[0.25em] uppercase mb-4">
              StudioBOLD
            </p>
            <p className="text-sm text-neutral-400 leading-7">
              bold@studiobold.co.kr
              <br />
              070. 8080. 3150
            </p>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-6">
          <p className="text-[11px] tracking-[0.1em] text-neutral-600 uppercase">
            COPYRIGHT &copy; 2026 STUDIOBOLD ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
