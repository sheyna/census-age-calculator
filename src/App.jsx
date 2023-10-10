import { useEffect, useState } from 'react'

// Date handling
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

// other components
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
import ResultsTable from './components/ResultsTable/ResultsTable';
import CensusMenu from './components/CensusMenu/CensusMenu';

// modules
import makeCensusList from './modules/census';

// css
import './App.css';

const today = dayjs();
const minDate = dayjs('1670-01-01 01:00');

function App() {
  const [ birthDate, setBirthDate ] = useState(null);

  const [ resultsView, setResultsView ] = useState({
    display: false,
    // btnText: 'Find Age',
    results: [],
    // btnVariant: 'contained',
    dateWritten: ''
  });

  const [ censusOptions, setCensusOptions ] = useState({
    showUSCensuses: true,
    show1890Census: false,
    showKansasCensus: true
  });

  const [ censusList, setCensusList ] = useState([]);

  function makeAgeInstance(age, censusDate) {
    return {
      age: age,
      censusName: censusDate.censusName,
      censusDate: censusDate.censusObj,
      dateWritten: censusDate.censusObj.format('D MMM YYYY')
    }
  }

  useEffect(function() {
    setCensusList(makeCensusList(censusOptions));
  }, [censusOptions]);

  useEffect(function() {
    function getAges() {
      const agesArr = [];
      if (censusList && censusList.length > 0) { 
        censusList.forEach((cen) => {
          // calcuate age
          if (cen.censusObj.year() >= birthDate.year()) {
            const age = cen.censusObj.diff(birthDate, 'year');
            agesArr.push(makeAgeInstance(age, cen));
          }
        });
      }
      setResultsView({
        results: agesArr,
        display: true,
        dateWritten: birthDate && birthDate.format('D MMM YYYY')
      });
    }
    if (birthDate){
      getAges();
    }
  }, [birthDate, censusList]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <header>
        <h1>Census Age Calculator</h1>
        <h2>How Old Were They on the Census Date?</h2>
        <p>Narrow down the birthdate of an ancestor<br/>
          by comparing their ages at census dates.<br/>
          Enter an approximate birthdate to start</p>
        <DrawerMenu
          // data={censusOptions}
          // setCensusOptions={setCensusOptions}
          openDrawerBtnText="Customize Census list"
        >
          <CensusMenu
            data={censusOptions}
            update={(newData) => {
              setCensusOptions(newData);
              }
            }
          />
        </DrawerMenu>
      </header>
      <main>
        {/* {error.isAnError && 
          <Alert severity={error.errorType}>{error.errorMsg}</Alert>
        } */}
        <form id="ageEntry">
          <DatePicker
            name='birthDate'
            value={birthDate}
            maxDate={today}
            minDate={minDate}
            format='DD/MM/YYYY'
            label='Approx Birth Date'
            disableFuture
            views={['day', 'month', 'year']}
            // onYearChange={() => setDisplayBtn(true)}
            onChange={(newValue) => {
              if (!Number.isNaN(newValue.year())){
                  setBirthDate(newValue);
              }
            }}
          />

          {/* {displayBtn && (
            <Button
              variant={resultsView.btnVariant}
              // onClick={handleUpdateCensusListResults}
            >
              {resultsView.btnText}
            </Button>
          )} */}
        </form>
        {resultsView.display && (
          <>
            <p>From a birthdate of {resultsView.dateWritten}</p>
            <ResultsTable agesData={resultsView.results} />
          </>
        )}
        <footer>
          <div className='note'>
            <p>Remember that ages reported in census records are often approximate.</p>
            <p>Use this tool to help you find the most likely approximate birthdate.</p>
          </div>

          <p className='credit'>© Sheyna Watkins</p>
        </footer>
      </main>
    </LocalizationProvider>
  )
}

export default App
