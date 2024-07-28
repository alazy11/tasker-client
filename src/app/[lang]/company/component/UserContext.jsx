import { createContext, useEffect, useState } from "react";

const CompanyInformation = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company?sender=company`, {
          credentials: 'include',
          headers: {
            "cache-control": "no-store",
          }
        });
        const data = await response.json();
        setCompanyData(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <CompanyInformation.Provider value={companyData}>
      {children}
    </CompanyInformation.Provider>
  );
};

export default CompanyInformation;