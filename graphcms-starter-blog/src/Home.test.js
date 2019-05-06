import React from 'react';
import { shallow, mount } from 'enzyme';
import { TestApp } from '../__test__/App';
import wait from 'waait';
import Home, {posts, H3} from './Home'
import { expect } from 'chai';
const Adapter = require('enzyme-adapter-react-16');
require('enzyme').configure({adapter: new Adapter()});
import renderer from 'react-test-renderer';

describe("", ()=>{
    const component = mount(<H3 title="fafa"></H3>)
    test("props.titleにfafaが渡ること", ()=>{
       expect(component.props().title).equal("fafa");
    })
    test("h3はtitleの値にならなければならない", ()=>{
       expect(component.find("h3").text()).equal("fafa")
    })
});

describe("query test", ()=> {
    test("Home queryのテスト", async () => {
        const homeQueryMocks = {
            request: {
                query: posts,
                variables: {skip: 0, first: 4} //本当のデータ
            },
            result: {
              data: {
                id: "cjuz611b5oz0j08308hf5a9w3",
                slug: "cjuzdcwftpl240830knle56jp",
                title: "今日からGWが始まった",
                dateAndTime: null,
                coverImage: {
                  handle:  "RztAVSb9TeCBD3uAdxom",
                },
                postsConnection: {
                    aggregate: {
                      count : 2
                    }
                  }
              }
            }
        }
       const wrapper = renderer.create(
        <TestApp mocks={[homeQueryMocks]}>
            <Home  />
        </TestApp>
       );

       await wait(0);
    //    const root = wrapper.getInstance();
    //    root.findByType("section");
    //    expect(wrapper.root.find('.Home-ul').length).equal(1);
    //    console.log(wrapper.toJSON());

    })

})

describe("clickable",()=> {
   test("", ()=>{
    const wrapper = renderer.create(
        <TestApp mocks={[homeQueryMocks]}>
            <Home  />
        </TestApp>
       );
       wrapper.find(".")
   }) 
})