import React from 'react';
import renderer from 'react-test-renderer';
import {QuestionGenre} from './question-genre';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/b/be/Toccata_et_Fugue_BWV565.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/5/5a/Johann_Sebastian_Bach_-_Klavierkonzert_d-moll_-_1._Allegro.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/6/60/Bach_-_cantata_140._1._chorus.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/45/J.S.Bach_–_BWV_578.oga`,
    genre: `rock`,
  }],
};

it(`QuestionGenre should render correctly`, () => {
  const tree = renderer.create(
      <QuestionGenre
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
