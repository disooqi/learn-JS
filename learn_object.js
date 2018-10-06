let disooqi = {
    fullName: 'Mohamed Eldesouki',
    age: 36,
    currentPosition: 'Research Associate',
    currentAffiliation: 'QCRI/HBKU/QF',
    PreviousPositions:[
        {position: 'Senior Software Engineer', company: 'OMS'},
        {position: 'Senior Software Engineer', company: 'Taya IT'},
        {position: 'Software Engineer', company: 'MGD'},
        {position: 'Instructor', company: 'Cairo University'},
        {position: 'Database Developer', company: 'Nahdet Misr'},
        {position: 'Network Administrator', company: 'Startup company'}
    ],
    marriageStatus: 'married',
    children: function () {
        if(this.marriageStatus === 'married'){
            return {num: 2, detail: [
                    { name: 'Mariam', dob: '10 July, 2018' },
                    { name: 'Fatema', dob:'21 November, 2013' }
                ]}
        }

    }
};

console.log(disooqi.children(), disooqi.age);