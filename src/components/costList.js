import React from 'react';

export function CostList(props) {

    const { posts } = props;

    return (
        <div>
            {posts.map((post) =>
                <div className="data" key={post.id}>
                    <div className="data__row">
                        <div className="data__row__left">
                            <div className="data__row__name">
                                {post.title}
                            </div>
                            <div className="data__row__date">
                                {post.date}
                            </div>
                        </div>
                        <div className="data__row__right">
                            {post.value}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

