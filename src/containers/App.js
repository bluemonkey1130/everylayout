import React, {Component} from 'react'
import Stack from "../components/EveryLayoutModules/Stack/Stack";

class App extends Component {

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
                    </div>
                    <stack-l space="3rem">
                        <h2>Stack JS Module</h2>
                        <stack-l space="1.5rem">
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                            <p>Architecto veniam magni veritatis. Ipsum repellat recusandae laborum. Voluptatum quae
                                eius unde culpa aspernatur nostrum.</p>
                        </stack-l>
                    </stack-l>

                </section>

            </article>
        );
    }
}

export default App;