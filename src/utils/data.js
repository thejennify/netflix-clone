

export default function dataSelection(  movies, series ) {

        return {
            movies: [
                {
                    title: 'thriller',
                    data: movies.filter( movie => movie.genre === 'thriller' ? console.log(movie) : null)

                },
                {
                    title: 'suspense',
                    data: movies.filter( movie => movie.genre === 'suspense' ? movie : null)
                },
                 {
                    title: 'drama',
                    data: movies.filter( movie => movie.genre === 'drama' ? movie : null)
                },
                {
                    title: 'children',
                    data: movies.filter( movie => movie.genre === 'children' ? movie : null)
                },
                {
                    title: 'romance',
                    data: movies.filter( movie => movie.genre === 'romance')
                },
                {
                    title: 'documentaries',
                    data: movies.filter( movie => movie.genre === 'documentaries')

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
