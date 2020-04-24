// extra samll devices: (max-width: 575.98px)
// samll devices: (max-width: 767.98px)
// medium devices: (max-width: 991.98px)
// large devices: (max-width: 1199.98px)

export default {
  up() {},
  down(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px",
      xl: "1600px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
