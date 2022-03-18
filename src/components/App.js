import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard';
import 'font-awesome/css/font-awesome.min.css';
import SignupPage from './SignupPage';

import LikeButton from './likebutton/LikeButton';
import ClickablePicture from './clickablePicture/ClickablePicture';
import Dice from './dice/Dice';
import Carousel from './Carousel';
import NumbersTable from './numberstable/NumbersTable';
import IronHelp from './IronHelp';
import FaceBook from './Facebook';

function App() {
  const name = 'Laura';

  return (
    <div className="App container">
      <h1>Iteration 1</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <hr />
      <h1>Iteration 2</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <hr />
      <h1>Iteration 3</h1>
      <Random min={8} max={10} />
      <Random min={1} max={100} />

      <hr />
      <h1>Iteration 4</h1>
      <BoxColor r={255} g={123} b={0} name="julia" />
      <BoxColor r={128} g={255} b={0} />

      <hr />
      <h1>Iteration 5</h1>
      <div className="d-flex flex-column align-items-center">
        <div className="w-50">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>

      <hr />
      <h1>Iteration 6</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <hr />
      <h1>Iteration 7</h1>
      <div className="d-flex flex-column align-items-center">
        <div className="w-50">
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </div>
      </div>

      <hr />
      <h1>Iteration 8</h1>
      <LikeButton />
      <LikeButton />

      <hr />
      <h1>Iteration 9</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />

      <hr />
      <h1>Iteration 10</h1>
      <Dice />

      <hr />
      <h1>Iteration 11</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <hr />
      <h1>Iteration 12</h1>
      <NumbersTable limit={12} />

      <hr />
      <h1>Iteration 13 - 14</h1>
      <FaceBook />

      <hr />
      <h1>Iteration 15</h1>
      <SignupPage />

      <hr />
      <h1>Iteration 16 - RGBColorPicker</h1>
      <RGBColorPicker />
    </div>
  );
}

export default App;
