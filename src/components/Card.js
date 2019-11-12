import React from 'react';
import { getImageUrl } from '../config';

class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            opened: false,
        };
    }

    toggleSummary = () => {
        const { opened } = this.state;

        this.setState({
            opened: !opened,
        });
    };

    render() {
        const {
            isLiked,
            onAddLike,
            onRemoveLike,
            movie: {
                backdrop_path,
                original_title,
                overview,
                release_date,
                vote_average,
                vote_count,
            },
        } = this.props;
        const { opened } = this.state;

        return (
            <div className="card">
                <div
                    className="card__image"
                    style={{ backgroundImage: `url(${getImageUrl(backdrop_path)})` }}
                />

                <div className="card__title">
                    {original_title}
                </div>

                <div className="card__like" onClick={isLiked ? onRemoveLike : onAddLike}>
                    <button className={`fa-heart${isLiked ? '' : '-o'}`} >Like</button>
                </div>


                <div className="card__subtitle">
                    <span>{release_date}</span>
                    <span>{vote_average} ({vote_count} votes)</span>
                </div>

                <div className="card-info">
                    <button className="card-info__header" onClick={this.toggleSummary}>
                        Toggle
                    </button>

                    {opened
                        ? <div className="card-info__description">{overview}</div>
                        : null
                    }

                </div>
            </div>
        );
    }
}

export default Card
