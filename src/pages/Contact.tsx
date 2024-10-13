import { Link } from "react-router-dom";
import { ProfileDetails } from "../data/main-data";

const Contact = () => {
  return (
    <div className="w-full h-full flex-1 flex flex-col md:flex-row sm:flex-col items-start p-8 text-softWhite gap-4">
      {/* Contact Information */}
      <div className="flex-1 w-full sm:w-full md:w-1/2 p-4 sm:p-4 md:p-2 rounded-2xl shadow-sm shadow-black text-lg">
        <h1 className="text-4xl mb-6">Contact Me</h1>
        <p className="mb-4 flex flex-row gap-2">
          <Link
            to={`tel:${ProfileDetails.phoneNumber}`}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
          >
            <img src="/icons/call.svg" alt="call" className="w-4" />
          </Link>
          {ProfileDetails.phoneNumber}
        </p>
        <p className="mb-4 flex flex-row gap-2">
          <Link
            to={`mailto:${ProfileDetails.email}`}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
          >
            <img src="/icons/email.svg" alt="email" className="w-4" />
          </Link>
          {ProfileDetails.email}
        </p>
        <p className="mb-4 flex flex-row gap-2">
          <Link
            to={`https://www.google.com/maps?q=${encodeURIComponent(ProfileDetails.location)}`}
            target="_blank"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
          >
            <img src="/icons/location.svg" alt="location" className="w-4" />
          </Link>
          {ProfileDetails.location}
        </p>
        <span className="flex items-center justify-center mb-5 gap-2 p-1">
          <Link
            to={ProfileDetails.socials.instagram}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
          >
            <img src="/icons/instagram.svg" alt="instagram" className="w-6" />
          </Link>
          <Link
            to={ProfileDetails.socials.linkedin}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
          >
            <img src="/icons/linkedin.svg" alt="linkedin" className="w-6" />
          </Link>
          <Link
            to={ProfileDetails.socials.github}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
          >
            <img src="/icons/github.svg" alt="github" className="w-6" />
          </Link>
        </span>
      </div>

      {/* Google Maps */}
      <div className="w-full sm:w-full md:w-1/2 h-full bg-black">
        <iframe
          className="w-full h-72 rounded-md shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2105788506034!2d78.07387361534732!3d27.9115942827039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974774eabdf5dfd%3A0x64a1e6d7e9dcdf1b!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696899218393!5m2!1sen!2sin"
          loading="lazy"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
