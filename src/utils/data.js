

export default function dataSelection(  movies, series ) {

        return {
            movies: [
                {
                    title: 'thriller',
                    data: movies.filter( movie => movie.genre === 'thriller')

                },
                {
                    title: 'suspense',
                    data: movies.filter( movie => movie.genre === 'suspense')
                },
                 {
                    title: 'drama',
                    data: movies.filter( movie => movie.genre === 'drama')
                },
                {
                    title: 'children',
                    data: movies.filter( movie => movie.genre === 'children' )
                },
                {
                    title: 'romance',
                    data: movies.filter( movie => movie.genre === 'romance')
                },
            ],
            series: [
                {
                    title: 'thriller',
                    data: series.filter( serie => serie.genre === 'thriller')

                },
                {
                    title: 'suspence',
                    data: series.filter( serie => serie.genre === 'suspence')
                },
                 {
                    title: 'drama',
                    data: series.filter( serie => serie.genre === 'drama')
                },
                {
                    title: 'children',
                    data: series.filter( serie => serie.genre === 'children')
                },
                {
                    title: 'romance',
                    data: series.filter( serie => serie.genre === 'romance')
                },
                {
                    title: 'documentaries',
                    data: movies.filter( movie => movie.genre === 'documentaries')

                }
            ]
        }
}
