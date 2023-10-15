import GbTracker from 'gb-tracker-client';

const gbTracker = new GbTracker('test', 'test');
gbTracker.autoSetVisitor();
gbTracker.sendSearchEvent({
    search: {
        query: 'acme',
        originalQuery: 'acme',
        correctedQuery: 'acme',
        totalRecordCount: 42,
        pageInfo: {
            recordStart: 1,
            recordEnd: 12,
        },
        area: 'test',
        selectedNavigation: [],
        records: [
            { _u: 'https://www.example.com/01' },
            { _u: 'https://www.example.com/02' },
            { _u: 'https://www.example.com/03' },
            { _u: 'https://www.example.com/04' },
            { _u: 'https://www.example.com/05' },
            { _u: 'https://www.example.com/06' },
            { _u: 'https://www.example.com/07' },
            { _u: 'https://www.example.com/08' },
            { _u: 'https://www.example.com/09' },
            { _u: 'https://www.example.com/10' },
            { _u: 'https://www.example.com/11' },
            { _u: 'https://www.example.com/12' }
        ],
        origin: { search: true }
    }
});
