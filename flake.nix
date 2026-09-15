{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { self, nixpkgs }:
    let
      forAllSystems = nixpkgs.lib.genAttrs [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
    in
    {
      packages = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          yarn = pkgs.yarn-berry_4;
        in
        {
          default = pkgs.stdenv.mkDerivation (finalAttrs: {
            pname = "blockfrost-js";
            version = (builtins.fromJSON (builtins.readFile ./package.json)).version;
            src = ./.;

            nativeBuildInputs = [ pkgs.nodejs yarn yarn.yarnBerryConfigHook ];

            missingHashes = ./missing-hashes.json;
            offlineCache = yarn.fetchYarnBerryDeps {
              inherit (finalAttrs) src missingHashes;
              hash = "sha256-eNOPTYzflksNhnlGsRtDUFX8wOt0gLPk9Et37Weh2EY=";
            };

            buildPhase = ''
              runHook preBuild
              yarn build
              runHook postBuild
            '';

            installPhase = ''
              runHook preInstall
              mkdir -p $out
              cp -r lib package.json node_modules $out/
              runHook postInstall
            '';
          });
        });

      devShells = forAllSystems (system:
        let pkgs = nixpkgs.legacyPackages.${system};
        in {
          default = pkgs.mkShell {
            packages = [ pkgs.nodejs pkgs.yarn-berry_4 ];
            shellHook = ''
              export PATH="$PATH:$(pwd)/node_modules/.bin"
            '';
          };
        });
    };
}
