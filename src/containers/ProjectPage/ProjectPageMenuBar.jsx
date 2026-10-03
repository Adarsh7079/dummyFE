import PropTypes from 'prop-types';

const menuItems = [
  { label: 'HOME', value: 'home' },
  { label: 'OVERVIEW', value: 'overview' },
  { label: 'HIGHLIGHTS', value: 'highlights' },
  { label: 'AMENITIES', value: 'amenities' },
  { label: 'GALLERY', value: 'gallery' },
  { label: 'FLOORPLAN', value: 'floorPlan' },
  { label: 'LOCATION', value: 'location' },
  { label: 'PRICING', value: 'pricing' },
];

const ProjectPageMenuBar = ({ onMenuItemClick }) => {
  return (
    <div className="project-header ">
      <div className="ProjectPageMenuBar bg-white shadow-md">
        <div className="container  flex flex-wrap justify-around p-1 items-center">
          {menuItems.map((item) => (
            <div
              key={item.value}
              className= "text-sm hover:text-white hover:bg-black rounded-lg cursor-pointer px-3 py-2"
              onClick={() => onMenuItemClick(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectPageMenuBar.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
};

export default ProjectPageMenuBar;
