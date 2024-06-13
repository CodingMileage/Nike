import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <>
      <div>
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </>
  );
};

export default Services;
