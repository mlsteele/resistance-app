.phony: icon

all:
	@echo "Read the Makefile"

icon:
	yo rn-toolbox:assets --icon ./assets/logo.png

splash:
	yo rn-toolbox:assets --splash ./assets/splash.png

open-xcode:
	open ios/resistance.xcodeproj
