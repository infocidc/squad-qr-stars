
interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="bg-sport-navy text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-center text-gray-300 mt-2">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
