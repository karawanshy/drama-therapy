interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  lightText?: boolean;
}

const PageHeader = ({ title, subtitle, imageSrc, lightText = false }: PageHeaderProps) => {
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`absolute inset-0 ${lightText ? 'bg-gradient-to-b from-background/30 via-background/20 to-background/30' : 'bg-gradient-to-b from-background/95 via-background/80 to-background/95'}`} />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-lora font-bold mb-6 animate-fade-in-up ${lightText ? 'text-white' : 'text-primary'}`}>
            {title}
          </h1>
          <p className={`text-xl md:text-2xl animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] ${lightText ? 'text-white/90' : 'text-muted-foreground'}`}>
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
