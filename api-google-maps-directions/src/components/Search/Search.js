/**
 * Created by Diego Santa Cruz on 12/10/2016.
 */
import React from 'react';

class Search extends React.Component
{
    constructor(props)
    {
        //Sobreescribe las propiedades, ya que vamos a utilizar propiedades, cuando no vamos a usar propiedades no es necesario llamar a super
        super(props);
        this.state = {
            search: ''
        };

        //De esta forma le ofrecemos el contexto de la clase Search y si podra acceder al estado
        this.onInputChange = this.onInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e)
    {
        e.preventDefault();
        //utilizamos props
        this.props.executeSearchOnSubmit(this.state.search);
    }

    //cada vez que el campo cambie
    onInputChange(e)
    {
        //actualizamos estado de search
        this.setState({
           search: e.target.value
        });
    }

    render()
    {
        return (
            <form className="form-inline" role="search" onSubmit={this.submitForm}>
                
                <div className="input-group col-md-12 col-sm-12 col-xs-12">
                    <input
                        onChange={this.onInputChange}
                        value={this.state.search}
                        className="form-control"
                        placeholder="Escribe tu búsqueda"
                    />

                    <span className="input-group-btn">
                        <button className="btn btn-danger" type="submit">
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
                
            </form>
        );
    }
}

export default Search;