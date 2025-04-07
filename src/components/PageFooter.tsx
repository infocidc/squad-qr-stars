
const PageFooter = () => {
  return (
    <footer className="bg-sport-navy text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-300">
          CIDC - X73 - Cloud Computing - Data referenced from The Guardian
        </p>
        <p className="text-xs text-gray-400 mt-2">
          &copy; {new Date().getFullYear()} Football Squad Cards
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
