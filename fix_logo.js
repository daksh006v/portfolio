const fs = require('fs');

const file = 'src/components/ui/logo.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find the Logo export function and replace everything from there to end of file
const logoFnStart = content.indexOf('\nexport function Logo(');
if (logoFnStart === -1) {
    console.error('Could not find Logo function!');
    process.exit(1);
}

const before = content.substring(0, logoFnStart);

const newLogoFn = `
export function Logo({ href, ...props }: Partial<AnimationProps & { href?: string }>) {
    const paths: SVGPathData[] = [
        {
            d: \`M21.29 82.91L2.69 82.91L2.69 75.49L8.40 75.49L8.40 20.31L2.69 20.31L2.69 12.89L20.80 12.89Q32.71 12.89 39.11 21.19Q45.41 29.35 45.41 46.78Q45.41 64.84 39.60 73.29Q33.01 82.91 21.29 82.91ZM20.41 20.31L16.41 20.31L16.41 75.49L21.00 75.49Q37.21 75.49 37.21 46.78Q37.21 32.52 32.57 26.07Q28.47 20.31 20.41 20.31Z\`,
        },
        {
            d: \`M64.94 49.27L56.93 49.27Q58.89 33.45 75.05 33.45Q91.31 33.45 91.31 50.88L91.31 74.76Q91.31 77.59 93.90 77.59Q94.78 77.59 96.29 77.25L96.29 84.28Q94.29 84.77 91.50 84.77Q84.91 84.77 84.03 77.39Q77.25 84.77 69.14 84.77Q63.82 84.77 60.40 81.98Q55.91 78.37 55.91 71.29Q55.91 54.83 84.13 52.88L84.13 50.88Q84.13 40.14 75.05 40.14Q65.67 40.14 64.94 49.27ZM84.13 65.77L84.13 59.18Q63.23 60.21 63.23 70.90Q63.23 78.08 70.31 78.08Q75.15 78.08 79.74 74.37Q84.13 70.90 84.13 65.77Z\`,
        },
        {
            d: \`M107.91 82.91L107.91 12.89L115.33 12.89L115.33 55.81L132.81 35.40L142.14 35.40L127.05 52.29L146.04 82.91L136.72 82.91L122.41 57.57L115.33 65.19L115.33 82.91L107.91 82.91Z\`,
        },
        {
            d: \`M156.01 68.16L163.92 68.16Q165.23 78.17 175.59 78.17Q185.99 78.17 185.99 70.85Q185.99 67.33 183.59 65.38Q181.05 63.28 174.51 60.99L173.10 60.45Q165.87 57.96 162.60 55.47Q157.91 51.81 157.91 46.63Q157.91 40.43 163.33 36.67Q168.02 33.45 174.71 33.45Q189.79 33.45 192.19 47.17L184.42 47.17Q183.20 39.84 174.61 39.84Q165.43 39.84 165.43 46.34Q165.43 50.59 177.73 54.93Q184.67 57.37 187.70 59.57Q193.60 63.77 193.60 70.65Q193.60 77.34 188.33 81.25Q183.35 84.86 175.39 84.86Q157.96 84.86 156.01 68.16Z\`,
        },
        {
            d: \`M207.32 82.91L207.32 12.89L214.75 12.89L214.75 40.77Q222.02 33.50 229.20 33.50Q237.35 33.50 241.11 40.67Q243.21 44.73 243.21 50.49L243.21 82.91L235.79 82.91L235.79 52.69Q235.79 40.58 228.03 40.58Q222.80 40.58 218.85 44.38Q214.75 48.49 214.75 53.76L214.75 82.91L207.32 82.91Z\`,
        },
    ];

    return href ? (
        <Link href={href}>
            <Animation {...props} paths={paths} viewBox="0 0 250 96" />
        </Link>
    ) : (
        <Animation {...props} paths={paths} viewBox="0 0 250 96" />
    );
}
`;

const newContent = before + newLogoFn;
fs.writeFileSync(file, newContent, 'utf8');
console.log('Logo function replaced successfully!');
console.log('Total lines:', newContent.split('\n').length);
