import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import QuestionLI from './QuestionLI'
import { useSelector } from 'react-redux';
import { selectAuthedUser } from '../slices/authedUser';
import { selectUsers } from '../slices/users';
import { selectQuestions } from '../slices/questions';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const authedUser = useSelector(selectAuthedUser)
  const users = useSelector(selectUsers)
  const questions = useSelector(selectQuestions)
  const questionsList = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Unanswered Questions" {...a11yProps(0)} />
          <Tab label="Answered Questions" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {questionsList.map((QID) => ( !users[authedUser].answers[QID] &&
          <QuestionLI
          key={QID}
          userName={users[questions[QID].author].name}
          userAvatar={users[questions[QID].author].avatarURL}
          contentSample={questions[QID].optionOne.text}
          isAnswered={false}
          qid={QID}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {questionsList.map((QID) => ( users[authedUser].answers[QID] &&
          <QuestionLI
          key={QID}
          userName={users[questions[QID].author].name}
          userAvatar={users[questions[QID].author].avatarURL}
          contentSample={questions[QID].optionOne.text}
          isAnswered={true}
          qid={QID}
          />
        ))}
      </TabPanel>
    </Box>
  );
}