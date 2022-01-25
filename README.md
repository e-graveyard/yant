[![Tests][gh-tc-shield]][gh-tc-url]
[![Code Coverage][codecov-shield]][codecov-url]
[![Code Quality][lgtm-shield]][lgtm-url]
[![Docker Image Size][docker-img-size-shield]][docker-url]
[![GitHub tag][tag-shield]][tag-url]

# Yet Another NodeJS Template

<img src="logo.svg" height="240px" align="right"/>

An opinionated template for NodeJS projects that includes, out of the box:

- Next generation JS with __Babel__
- Unit testing with __Jest__
- Code coverage on __Codecov__
- __Docker__ image
- Good-looking API documentation with __JSDoc__
- CI/CD pipeline on __GitHub Actions__ with:
    - Node modules caching for faster pipelines
    - Linting, style and code duplication checking
    - Test execution and coverage report upload
    - Docker image build and push to DockerHub

The API documentation live preview is available at [yant.upsetbit.co](https://yant.upsetbit.co).

[gh-tc-shield]: https://img.shields.io/github/workflow/status/caian-org/yant/run-tests-and-upload-coverage?label=tests&logo=github&style=flat-square
[gh-tc-url]: https://github.com/caian-org/yant/actions/workflows/test-with-cov.yml

[codecov-shield]: https://img.shields.io/codecov/c/github/caian-org/yant.svg?logo=codecov&logoColor=FFF&style=flat-square
[codecov-url]: https://codecov.io/gh/caian-org/yant

[lgtm-shield]: https://img.shields.io/lgtm/grade/javascript/g/caian-org/yant.svg?logo=lgtm&style=flat-square
[lgtm-url]: https://lgtm.com/projects/g/caian-org/yant/context:javascript

[docker-img-size-shield]: https://img.shields.io/docker/image-size/caian/yant?sort=semver&logo=docker&logoColor=FFF&style=flat-square
[docker-url]: https://hub.docker.com/r/caian/yant

[tag-shield]: https://img.shields.io/github/tag/caian-org/yant.svg?logo=git&logoColor=FFF&style=flat-square
[tag-url]: https://github.com/caian-org/yant/releases


## Compatibility

Any version above `12.x` is okay: `yant` is tested against the latest three
NodeJS LTS versions (`12.22`, `14.18` and `16.13`) and the most recent
available (`>= 17`).


## How can I use it?

Take what suits you, ignore or change what you do not like, and apply according
to his will.


## License

To the extent possible under law, [Caian Ertl][me] has waived __all copyright
and related or neighboring rights to this work__. In the spirit of _freedom of
information_, I encourage you to fork, modify, change, share, or do whatever
you like with this project! [`^C ^V`][kopimi]

[![License][cc-shield]][cc-url]

[me]: https://github.com/upsetbit
[cc-shield]: https://forthebadge.com/images/badges/cc-0.svg
[cc-url]: http://creativecommons.org/publicdomain/zero/1.0

[kopimi]: https://kopimi.com
