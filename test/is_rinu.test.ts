import { is_rinu } from '#/url';

describe('sample', () => {
    describe('rinu.cf', () => {
        describe('https', () => {
            test('no slash', () => {
                expect(is_rinu('https://rinu.cf/me')).toBeTruthy();
            });

            test('slash', () => {
                expect(is_rinu('https://rinu.cf/me/')).toBeTruthy();
            });
        });

        describe('http', () => {
            test('no slash', () => {
                expect(is_rinu('http://rinu.cf/me')).toBeTruthy();
            });

            test('slash', () => {
                expect(is_rinu('http://rinu.cf/me/')).toBeTruthy();
            });
        });
    });

    describe('rinu.jp', () => {
        describe('https', () => {
            test('no slash', () => {
                expect(is_rinu('https://rinu.jp/me')).toBeTruthy();
            });

            test('slash', () => {
                expect(is_rinu('https://rinu.jp/me/')).toBeTruthy();
            });
        });

        describe('http', () => {
            test('no slash', () => {
                expect(is_rinu('http://rinu.jp/me')).toBeTruthy();
            });

            test('slash', () => {
                expect(is_rinu('http://rinu.jp/me/')).toBeTruthy();
            });
        });
    });

    describe('error', () => {
        test('other site', () => {
            expect(is_rinu('https://example.com')).toBeFalsy();
        });

        test('many slash', () => {
            expect(is_rinu('https://rinu.jp/me//')).toBeFalsy();
        });

        test('upper', () => {
            expect(is_rinu('https://rinu.cf/ME')).toBeFalsy();
        });
    });
});
