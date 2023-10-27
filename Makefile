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
