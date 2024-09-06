export function play(docDefinition: any) {
  const code = `${docDefinition} dd`;
  const evalstore = eval(code);
  return evalstore;
}

export const exampleContent = `var dd = {
    content: [
        { text: 'Tables', style: 'header' },
        {
            alignment: 'justify',
            columns: [
                {
                    image: 'bar',
                    width: 200,
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
                }
            ]
        },
        ,
        'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
        {
            image: 'pill',
            width: 200,
        },
        { text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader' },
        'The following table has nothing more than a body array',
        {
            style: 'tableExample',
            table: {
                body: [
                    ['Column 1', 'Column 2', 'Column 3'],
                    ['One value goes here', 'Another one here', 'OK?']
                ]
            }
        },
        { text: 'Head', style: 'header' },
        'Official don\\'t documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{
        alignment: 'justify',
        columns: [
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
            }
        ]
    },
    ],
    defaultStyle: {
        font: "IBM",
        columnGap: 20,
    },
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5],
        },
        tableExample: {
            margin: [0, 5, 0, 15],
        },
        tableOpacityExample: {
            margin: [0, 5, 0, 15],
            fillColor: "blue",
            fillOpacity: 0.3,
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: "black",
        },
    },
    images: {
        pill: 'http://localhost:5173/test.png',
        bar: 'http://localhost:5173/test.png'
    },
  };`;
