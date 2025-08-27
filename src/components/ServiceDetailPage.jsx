import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import DetailedServiceView from '../components/DetailedServiceView';
import { servicesData } from '../data/serviceData';


const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find(s => s.slug === serviceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleBackToServices = () => {
    navigate('/services');
  };

  return (
    <DetailedServiceView service={service} onBack={handleBackToServices} />
  );
};

export default ServiceDetailPage;