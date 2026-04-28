import React from 'react'

interface CapstoneProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
      title: string;
      description?: string;
      images?: string[];
      role?: string;
      challenges?: string;
    };
  }
  

const Capstone: React.FC<CapstoneProps> = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-[#212A3E] p-8 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto flex flex-col items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#F1F6F9] mb-6">{project.title}</h2>
          <p className="text-sm md:text-base lg:text-lg text-[#9BA4B5] mb-6">{project.description}</p>
  
          {/* Image Carousel / Screenshots */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            <p>{project.images?.map((img, index) => (
              <img key={index} src={img} alt="Project screenshot" className="w-full max-w-[90%] md:max-w-[700px] h-auto object-cover rounded-md" />
            ))}</p>
          </div>

          {/* My Role Section */}
          <div className="mt-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#F1F6F9]">✅ My Role for the Project</h3>
              <p className="text-sm md:text-base lg:text-lg text-[#9BA4B5] mt-2">{project.role}</p>
          </div>

          {/* Challenges & Solutions Section */}  
          <div className="mt-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#F1F6F9]">🚀 Challenges & Solutions</h3>
              <p className="text-sm md:text-base lg:text-lg text-[#9BA4B5] mt-2">{project.challenges}</p>
          </div>

          <button onClick={onClose} className="mt-6 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-[#394867] text-white rounded-md text-sm md:text-base lg:text-lg">
            Close
          </button>
        </div>
      </div>
    );
  };

export default Capstone