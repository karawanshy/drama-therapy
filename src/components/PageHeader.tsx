interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const PageHeader = ({ title, subtitle, imageSrc }: PageHeaderProps) => {
  return (
    <header className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
