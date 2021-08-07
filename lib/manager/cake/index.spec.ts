import { getName, loadFixture } from '../../../test/util';
import { extractPackageFile } from '.';

const content = loadFixture('build.cake');

describe(getName(), () => {
  it('extracts', () => {
    // FIXME: explicit assert condition
    expect(extractPackageFile(content)).toMatchSnapshot();
  });
});
