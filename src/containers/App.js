import React, {Component} from 'react'
import Stack from "../components/EveryLayoutModules/Stack/Stack";
import Box from "../components/EveryLayoutModules/Box/Box";
import Grid from "../components/EveryLayoutModules/TheGrid/TheGrid";
import Frame from "../components/EveryLayoutModules/Frame/Frame";
import '../components/EveryLayoutModules/TheGrid/Grid.css'
import '../components/EveryLayoutModules/Box/Box.css'
import '../components/EveryLayoutModules/Frame/Frame.css'
import '../components/EveryLayoutModules/Stack/Stack.css'

class App extends Component {
    state = {
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',

    }

    render() {
        return (
            <article className="grid-row">
                <section className="grid-layout standard has-one-column">
                    <div className="stack-small">
                        <h1>Heading One</h1>
                        <h2>Heading Two</h2>
                        <h3>Heading Three</h3>
                        <h4>Heading Four</h4>
                        <h5>Heading Five</h5>
                        <h6>Heading Six</h6>
                        <p>Nu pour pièce étranger. Devant peu dame droit annoncer te. Hiver retour fois désespoir.
                            Last body step leader million direction account week. Special yet too onto camera power
                            civil. Almost particular level throughout.</p>
                    </div>
                </section>
                <section className="grid-layout standard has-two-columns">
                    <div className="stack">
                        <h2>Stack CSS Class</h2>
                        <div className="stack">
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                        </div>
                        <h2>Stack CSS Class</h2>
                        <div className="stack">
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                        </div>
                    </div>
                    <stack-l space="1.5rem">
                        <h2>Stack JS Module</h2>
                        <stack-l space="1.5rem">
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                        </stack-l>
                        <h3>Heading One</h3>
                        <stack-l recursive space="1.5rem">
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Reiciendis qui odit repellendus quis voluptatum magni.</p>
                            <a href="#">nam</a>
                        </stack-l>
                    </stack-l>
                </section>
                <section className="grid-layout standard has-three-columns">
                    <div className="box invert">
                        <p>Box CSS class usage</p>
                    </div>
                    <div className="box">
                        <p>Box CSS class usage</p>
                    </div>
                    <div className="box invert">
                        <p>Box CSS class usage</p>
                    </div>
                </section>
                <section className="grid-layout standard has-three-columns">
                    <box-l>
                        <p>Box component class usage</p>
                    </box-l>
                    <box-l>
                        <p>Box component class usage</p>
                    </box-l>
                    <box-l>
                        <p>Box component class usage</p>
                    </box-l>
                </section>
                <section className="grid-layout standard">
                    <div className="stack center-l">
                        <h3>More such food reveal ok improve similar.</h3>
                        <p>Puis contre forme fait avancer absolu lumière. Semblable accent sourire agiter parti. Ci ouvrir savoir plonger santé caractère simple.</p>
                        <p>Ab modi rem consequatur delectus. Fugiat dicta id cumque aliquam nostrum facilis. Maiores repellendus ad eaque harum culpa suscipit.</p>
                        <p>Ab modi rem consequatur delectus. Fugiat dicta id cumque aliquam nostrum facilis. Maiores repellendus ad eaque harum culpa suscipit.</p>
                    </div>
                </section>
                <section className="grid-layout standard">
                    <grid-l min="calc(var(--measure) / 2)">
                        <div className="box">
                            <stack-l>
                                <p>Fugiat expedita ipsum. Tempora reiciendis molestias nulla voluptate maiores. Aliquid
                                    doloribus excepturi cumque reprehenderit eum autem.</p>
                                <p>Fugiat expedita ipsum. Tempora reiciendis molestias nulla voluptate maiores. Aliquid
                                    doloribus excepturi cumque reprehenderit eum autem.</p>
                                <p>Fugiat expedita ipsum. Tempora reiciendis molestias nulla voluptate maiores. Aliquid
                                    doloribus excepturi cumque reprehenderit eum autem.</p>
                            </stack-l>
                        </div>
                        <box-l>
                            <stack-l>
                                <figure className="frame">
                                    <img src={this.state.img} alt="Text"/>
                                </figure>
                                <p>Fugiat expedita ipsum. Tempora reiciendis molestias nulla voluptate maiores. Aliquid
                                    doloribus excepturi cumque reprehenderit eum autem.</p>
                            </stack-l>
                        </box-l>
                        <box-l>
                            <stack-l>
                                <figure className="frame">
                                    <img src={this.state.img} alt="Text"/>
                                </figure>
                                <p>Fugiat expedita ipsum. Tempora reiciendis molestias nulla voluptate maiores. Aliquid
                                    doloribus excepturi cumque reprehenderit eum autem.</p>
                            </stack-l>
                        </box-l>
                        <box-l>
                            <stack-l>
                                <h3>Animi alias ducimus velit totam odio.</h3>
                                <p>Fugiat expedita ipsum. Tempora reiciendis molestias nulla voluptate maiores. Aliquid
                                    doloribus excepturi cumque reprehenderit eum autem.</p>
                            </stack-l>
                        </box-l>
                    </grid-l>
                </section>
                <section className="grid-layout standard has-three-columns">
                    <figure className="frame">
                        <img src={this.state.img} alt="Text"/>
                    </figure>
                    <figure className="frame">
                        <img src={this.state.img} alt="Text"/>
                    </figure>
                    <figure className="frame">
                        <img src={this.state.img} alt="Text"/>
                    </figure>
                    {/*<frame-l ratio="6:9">*/}
                    {/*    <img src={this.state.img} alt="Text"/>*/}
                    {/*</frame-l>*/}
                </section>

            </article>
        );
    }
}

export default App;