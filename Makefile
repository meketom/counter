current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

.PHONY: compile
compile:
	truffle compile

.PHONY: deploy-dev
deploy-dev:
	truffle migrate --reset --network development

.PHONY: deploy-scroll
deploy-scroll:
	truffle migrate --reset --network scroll

.PHONY: deploy-linea
deploy-linea:
	npx hardhat run scripts/deploy.js --network linea_mainnet

.PHONY: interact-scroll
interact-scroll:
	truffle exec run.js --network scroll
