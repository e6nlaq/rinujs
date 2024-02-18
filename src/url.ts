// import { parse } from 'query-string/base';

/**
 * Function to check if a given URL is rinu.cf or rinu.jp
 * @param url URL to check
 * @returns Whether the format of rinu.cf or rinu.jp is satisfied
 */
export function is_rinu(url: string): boolean {
    if (/^https?:\/\/rinu\.(cf|jp)\/[a-z\d]+\/?$/.test(url)) {
        // if (url.match(/https?:\/\/rinu\.(cf|jp)\/[a-z\d]+\/?/)) {
        return true;
    } else {
        return false;
    }
}

/**
 *
 * @param url
 * @returns
 */
export function get_code(url: string): string {
    if (!is_rinu(url)) {
        throw new Error('Not in rinu.cf or rinu.jp format');
    }

    const pages = url.split('/');
    if (pages[pages.length - 1] === '') {
        return pages[pages.length - 2];
    } else {
        return pages[pages.length - 1];
    }
}
