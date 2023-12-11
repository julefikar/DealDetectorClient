import React from "react";
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import PetsIcon from '@mui/icons-material/Pets';
import BrushIcon from '@mui/icons-material/Brush';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SchoolIcon from '@mui/icons-material/School';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import HouseIcon from '@mui/icons-material/House';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-[#BFDBF7] text-center p-5 mt-12">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-jet">Explore Categories&nbsp;
                    <Tooltip title="Our available products types are listed below!" placement="right">
                        <InfoOutlinedIcon fontSize='small' />
                    </Tooltip>
                </h1>
            </div>

            <div className="IconRow">
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
    <div className="Icons">
        {Icon}
        <p className="IconLabel">{label}</p>
    </div>
);

export default Footer;
