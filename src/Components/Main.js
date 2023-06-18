import * as React from 'react';
import ButtonAppBar from "./AppBarC.js"
import Box from '@mui/material/Box';
import JobCard from "./JobCard.js";
import AccountImg from "../images/account.svg";
import ManageImg from "../images/manage.svg";
import MyhomeImg from "../images/myhome.svg";
import LoopImg from "../images/loop-studios.svg";
import InsureImg from "../images/insure.svg";
import EyeImg from "../images/eyecam-co.svg";
import AirImg from "../images/the-air-filter-company.svg";
import PhotoImg from "../images/photosnap.svg";
import FaceImg from "../images/faceit.svg";
import ShortlyImg from "../images/shortly.svg";

const list = [
  {
    id: 1,
    Img: PhotoImg,
    company: 'Photosnap',
    new: true,
    featured: true,
    jobtitle: 'Senior Frontend Developer',
    time: '1d ago',
    contract: 'Full Time',
    location: 'USA only',
    skill: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    Img: ManageImg,
    company: 'Manage',
    new: true,
    featured: true,
    jobtitle: 'Fullstack Developer',
    time: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    skill: ['Fullstack', 'Midweight', 'Python', 'React'],
  },
  {
    id: 3,
    Img: AccountImg,
    company: 'Account',
    new: true,
    jobtitle: 'Junior Frontend Developer',
    time: '2d ago',
    contract: 'Part Time',
    location: 'USA only',
    skill: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
  },
  {
    id: 4,
    Img: MyhomeImg,
    company: 'MyHome',
    jobtitle: 'Junior Frontend Developer',
    time: '5d ago',
    contract: 'Contract',
    location: 'USA only',
    skill: ['Frontend', 'Junior', 'CSS', 'Javascript'],
  },
  {
    id: 5,
    Img: LoopImg,
    company: 'Loop Studios',
    jobtitle: 'Software Engineer',
    time: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    skill: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
  },
  {
    id: 6,
    Img: FaceImg,
    company: 'FaceIt',
    jobtitle: 'Junior Backend Developer',
    time: '2w ago',
    contract: 'Full Time',
    location: 'UK only',
    skill: ['Backend', 'Junior', 'Ruby', 'RoR'],
  },
  {
    id: 7,
    Img: ShortlyImg,
    company: 'Shortly',
    jobtitle: 'Junior Developer',
    time: '2w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    skill: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
  },
  {
    id: 8,
    Img: InsureImg,
    company: 'Insure',
    jobtitle: 'Junior Frontend Developer',
    time: '2w ago',
    contract: 'Full Time',
    location: 'USA only',
    skill: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
  },
  {
    id: 9,
    Img: EyeImg,
    company: 'Eyecam Co.',
    jobtitle: 'Full Stack Engineer',
    time: '3w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    skill: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
  },
  {
    id: 10,
    Img: AirImg,
    company: 'The Air Filter Company',
    jobtitle: 'Front-end Dev',
    time: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    skill: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
  },
];




export default function Main() {
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [cards, setCards] = React.useState(list);




  React.useEffect(() => {
    let newCards = [];
    if (selectedTags.length > 0) {
      list.forEach((value) => {
        let show = true;
        for (let i = 0; i < selectedTags.length; i++) {
          if (value.skill.indexOf(selectedTags[i]) === -1) {
            show = false;
          }
        }
        if (show) {
          newCards.push(value)
        }
      });
      setCards(newCards);
    } else {
      setCards(list);
    }
  }, [selectedTags]);



  const addNewTag = (name) => {
    if (selectedTags.indexOf(name) === -1) {
      setSelectedTags([...selectedTags, name]);
    }
  };

  const removeAllTags = () => {
    setSelectedTags([]);
  }

  const removeTag = (name) => {
    let newTags = [...selectedTags];

    let index = newTags.indexOf(name);

    newTags.splice(index, 1);

    setSelectedTags(newTags);
  }

  return (
    <Box sx={{ width: "100%", height: "100%", minHeight: "100vh", background: "#e6f2f2" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ButtonAppBar tags={selectedTags} removeTag={removeTag} removeAllTags={removeAllTags} />
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "70%", gap: "15px", paddingBottom: "30px" }}>
            {cards.map((value, index) => {

              return <JobCard updateTags={addNewTag} newCard={value.new} featured={value.featured} image={value.Img} company={value.company} name={value.jobtitle} details={[value.time, value.contract, value.location]} skills={value.skill} />

            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

