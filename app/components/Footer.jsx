
const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        <div className="container mx-auto">
          <p className="mb-2">&copy; {currentYear} Shreyas Chandolkar. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  