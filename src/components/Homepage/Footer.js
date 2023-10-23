import React from "react";
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import PetsIcon from '@mui/icons-material/Pets';
import BrushIcon from '@mui/icons-material/Brush';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SchoolIcon from '@mui/icons-material/School';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import HouseIcon from '@mui/icons-material/House';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Footer = () => {
    return (
        <div className="bg-ashGray text-center p-5 mt-12">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-jet">Explore Categories</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                <IconComponent Icon={<BuildIcon />} label="Accessories" />
                <IconComponent Icon={<ComputerIcon />} label="Electronics" />
                <IconComponent Icon={<PetsIcon />} label="Pets" />
                <IconComponent Icon={<BrushIcon />} label="Beauty" />
                <IconComponent Icon={<SportsEsportsIcon />} label="Gaming" />
                <IconComponent Icon={<SchoolIcon />} label="School" />
                <IconComponent Icon={<PhotoCameraBackIcon />} label="Camera" />
                <IconComponent Icon={<HouseIcon />} label="Home" />
                <IconComponent Icon={<SportsBasketballIcon />} label="Sports" />
            </div>
        </div>
    );
}

const IconComponent = ({ Icon, label }) => (
    <div className="flex flex-col items-center space-y-2 transform transition-transform hover:scale-110 cursor-pointer">
        {Icon}
        <p className="text-lg text-003D33">{label}</p>
    </div>
);

export default Footer;
