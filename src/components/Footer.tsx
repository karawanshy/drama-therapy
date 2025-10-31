const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dr. Iman Kheil. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Drama Therapy | Expressive Arts Therapy | Malden, MA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
