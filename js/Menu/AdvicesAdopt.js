import React, {Component} from 'react';
import AdoptMainText from "../Adoption/MainTextSection";
import shelterImage from "../../images/animal-shelter.jpg";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class AdvicesAdopt extends Component{
    render() {

        return(
            <>
                <section className='advices-and-about-us'>
                    <div className='container'>
                        <ScrollUpButton ContainerClassName="AnyClassForContainer" />
                        <AdoptMainText text={'PORADY'}/>
                        <div className='section-container'>
                            <div className='section-image'>
                                <img src='https://lh3.googleusercontent.com/J0AlREIEzxOxSvy4-XW02CWjQWlGagxvaykGFGlXz6xYvcXljyB5cNVxz8CEkLmcOkF7T1Yy_TTbbdubHU8_lHz82gBfv60dfO9blImJ-mj5JNrZJ1htrs5c-tvSpVHtLNJo4r6YO6cyrYB8ICEWtbVIrt0oj05nVcn5OSGOJArjcj7hgHpJbXk7N9Bgz900K0K5v5TaJpp_9czgThtCS9TBOFjMnoPfGhUUqAEwvpHQIDL5j95eJVSjXw8sxZi42xUVt-NLZMvr1dRZx4efs4gYkLEPraOFCtJ1CCMWJuXNIE3k9hDopODXu_5zC8yO-8lX_8MyW4O-Rt_8TZ-dPKNzV2uwLoUx-BPvEYXke5qsjS7ilMwHNKkgsYZ73tL-ssJ5S4RTaZBLFB5aWjMT4nR1xkmDGRVuDcTMB91LCB-HAFqhnB48o7OaC-wccMzzGXTG_dJK1ouFdHTeWgwUnPsqp7bxGYaEWzexO_kZAvWJDy_da9bFhf-wuN-qjW6wD68HCD8bc1CI6U9zCs5sb0v6hx_wLOnjzTsq3W6WszP5f95ObS8rQDtvtwOTMOLs2g2WneuiRupXPhhXMQz2sIcNg_2Jz4lNr6invbbqZdCyU79wBg5zSx26npF7DoWGqnQdvED1mbxXneyBOoXqw1CnCmh9vfBZvh1lmOR6ejIrAHGfEjuX=w1367-h943-no'/>
                            </div>
                            <div className='section-text'>
                                <h1>What is Lorem Ipsum?</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h2>Where does it come from?</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                        </div>
                    </div>
                </section>
                </>

        )
    }
}

export default AdvicesAdopt
