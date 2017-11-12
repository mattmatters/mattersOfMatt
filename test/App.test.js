/* eslint-disable import/no-extraneous-dependencies,
   no-unused-expressions, react/jsx-filename-extension */
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { should } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import Skill from '../src/components/Skill';
import NavBar from '../src/components/NavBar';
import Skills from '../src/components/Skills';
import Portfolio from '../src/components/Portfolio';
import App from '../src/components/App';
import Footer from '../src/components/Footer';

should();
// Components
describe('Components', () => {
  describe('Skill', () => {
    const wrapper = shallow(<Skill title="poop" img="dlkj" description="cool" />);
    it('renders without exploding', () => {
      wrapper.should.have.length(1);
    });
  });
  describe('Skills', () => {
    const wrapper = shallow(<Skills />);
    it('renders without exploding', () => {
      wrapper.should.have.length(1);
    });
  });
  describe('NavBar', () => {
    const wrapper = shallow(<NavBar />);
    it('renders without exploding', () => {
      wrapper.should.have.length(1);
    });
  });
  describe('Portfolio', () => {
    const wrapper = shallow(<Portfolio />);
    it('renders without exploding', () => {
      wrapper.should.have.length(1);
    });
  });
  describe('Footer', () => {
    const wrapper = shallow(<Footer />);
    it('renders without exploding', () => {
      wrapper.should.have.length(1);
    });
  });
  describe('App', () => {
    const wrapper = shallow(<App />);
    it('renders without exploding', () => {
      wrapper.should.have.length(1);
    });
  });
});
