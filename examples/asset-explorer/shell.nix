with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "blockfrost-demo-asset-explorer";
  buildInputs = [
    nodejs-14_x
    yarn
  ];
  shellHook = ''
    export PATH="$PATH:$(pwd)/node_modules/.bin"
  '';
}
